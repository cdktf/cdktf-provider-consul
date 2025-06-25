/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclBindingRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ACL auth method this rule apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#auth_method AclBindingRule#auth_method}
  */
  readonly authMethod: string;
  /**
  * The name to bind to a token at login-time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_name AclBindingRule#bind_name}
  */
  readonly bindName: string;
  /**
  * Specifies the way the binding rule affects a token created at login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_type AclBindingRule#bind_type}
  */
  readonly bindType: string;
  /**
  * A free form human readable description of the binding rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#description AclBindingRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#id AclBindingRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace to create the binding rule within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#namespace AclBindingRule#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the ACL binding rule is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#partition AclBindingRule#partition}
  */
  readonly partition?: string;
  /**
  * The expression used to match this rule against valid identities returned from an auth method validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#selector AclBindingRule#selector}
  */
  readonly selector?: string;
  /**
  * bind_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#bind_vars AclBindingRule#bind_vars}
  */
  readonly bindVars?: AclBindingRuleBindVars;
}
export interface AclBindingRuleBindVars {
  /**
  * The name of node, workload identity or service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#name AclBindingRule#name}
  */
  readonly name?: string;
}

export function aclBindingRuleBindVarsToTerraform(struct?: AclBindingRuleBindVarsOutputReference | AclBindingRuleBindVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function aclBindingRuleBindVarsToHclTerraform(struct?: AclBindingRuleBindVarsOutputReference | AclBindingRuleBindVars): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AclBindingRuleBindVarsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AclBindingRuleBindVars | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclBindingRuleBindVars | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule consul_acl_binding_rule}
*/
export class AclBindingRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_binding_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclBindingRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclBindingRule to import
  * @param importFromId The id of the existing AclBindingRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclBindingRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_acl_binding_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.22.0/docs/resources/acl_binding_rule consul_acl_binding_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclBindingRuleConfig
  */
  public constructor(scope: Construct, id: string, config: AclBindingRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_binding_rule',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.22.0',
        providerVersionConstraint: '~> 2.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authMethod = config.authMethod;
    this._bindName = config.bindName;
    this._bindType = config.bindType;
    this._description = config.description;
    this._id = config.id;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._selector = config.selector;
    this._bindVars.internalValue = config.bindVars;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_method - computed: false, optional: false, required: true
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // bind_name - computed: false, optional: false, required: true
  private _bindName?: string; 
  public get bindName() {
    return this.getStringAttribute('bind_name');
  }
  public set bindName(value: string) {
    this._bindName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindNameInput() {
    return this._bindName;
  }

  // bind_type - computed: false, optional: false, required: true
  private _bindType?: string; 
  public get bindType() {
    return this.getStringAttribute('bind_type');
  }
  public set bindType(value: string) {
    this._bindType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bindTypeInput() {
    return this._bindType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: string; 
  public get partition() {
    return this.getStringAttribute('partition');
  }
  public set partition(value: string) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // selector - computed: false, optional: true, required: false
  private _selector?: string; 
  public get selector() {
    return this.getStringAttribute('selector');
  }
  public set selector(value: string) {
    this._selector = value;
  }
  public resetSelector() {
    this._selector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector;
  }

  // bind_vars - computed: false, optional: true, required: false
  private _bindVars = new AclBindingRuleBindVarsOutputReference(this, "bind_vars");
  public get bindVars() {
    return this._bindVars;
  }
  public putBindVars(value: AclBindingRuleBindVars) {
    this._bindVars.internalValue = value;
  }
  public resetBindVars() {
    this._bindVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindVarsInput() {
    return this._bindVars.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_method: cdktf.stringToTerraform(this._authMethod),
      bind_name: cdktf.stringToTerraform(this._bindName),
      bind_type: cdktf.stringToTerraform(this._bindType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      selector: cdktf.stringToTerraform(this._selector),
      bind_vars: aclBindingRuleBindVarsToTerraform(this._bindVars.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_method: {
        value: cdktf.stringToHclTerraform(this._authMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_name: {
        value: cdktf.stringToHclTerraform(this._bindName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_type: {
        value: cdktf.stringToHclTerraform(this._bindType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partition: {
        value: cdktf.stringToHclTerraform(this._partition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      selector: {
        value: cdktf.stringToHclTerraform(this._selector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bind_vars: {
        value: aclBindingRuleBindVarsToHclTerraform(this._bindVars.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AclBindingRuleBindVarsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
