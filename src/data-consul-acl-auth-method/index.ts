// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataConsulAclAuthMethodConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method#id DataConsulAclAuthMethod#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method#name DataConsulAclAuthMethod#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method#namespace DataConsulAclAuthMethod#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method#partition DataConsulAclAuthMethod#partition}
  */
  readonly partition?: string;
}
export interface DataConsulAclAuthMethodNamespaceRule {
}

export function dataConsulAclAuthMethodNamespaceRuleToTerraform(struct?: DataConsulAclAuthMethodNamespaceRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataConsulAclAuthMethodNamespaceRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataConsulAclAuthMethodNamespaceRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataConsulAclAuthMethodNamespaceRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_namespace - computed: true, optional: false, required: false
  public get bindNamespace() {
    return this.getStringAttribute('bind_namespace');
  }

  // selector - computed: true, optional: false, required: false
  public get selector() {
    return this.getStringAttribute('selector');
  }
}

export class DataConsulAclAuthMethodNamespaceRuleList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataConsulAclAuthMethodNamespaceRuleOutputReference {
    return new DataConsulAclAuthMethodNamespaceRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method consul_acl_auth_method}
*/
export class DataConsulAclAuthMethod extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_auth_method";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataConsulAclAuthMethod resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataConsulAclAuthMethod to import
  * @param importFromId The id of the existing DataConsulAclAuthMethod that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataConsulAclAuthMethod to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_acl_auth_method", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/data-sources/acl_auth_method consul_acl_auth_method} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataConsulAclAuthMethodConfig
  */
  public constructor(scope: Construct, id: string, config: DataConsulAclAuthMethodConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_auth_method',
      terraformGeneratorMetadata: {
        providerName: 'consul',
        providerVersion: '2.20.0',
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
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: true, optional: false, required: false
  private _config = new cdktf.StringMap(this, "config");
  public get config() {
    return this._config;
  }

  // config_json - computed: true, optional: false, required: false
  public get configJson() {
    return this.getStringAttribute('config_json');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
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

  // max_token_ttl - computed: true, optional: false, required: false
  public get maxTokenTtl() {
    return this.getStringAttribute('max_token_ttl');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // namespace_rule - computed: true, optional: false, required: false
  private _namespaceRule = new DataConsulAclAuthMethodNamespaceRuleList(this, "namespace_rule", false);
  public get namespaceRule() {
    return this._namespaceRule;
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

  // token_locality - computed: true, optional: false, required: false
  public get tokenLocality() {
    return this.getStringAttribute('token_locality');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
    };
  }
}
