/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AclRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A free form human readable description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#description AclRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#id AclRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the ACL role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#name AclRole#name}
  */
  readonly name: string;
  /**
  * The namespace to create the role within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#namespace AclRole#namespace}
  */
  readonly namespace?: string;
  /**
  * The partition the ACL role is associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#partition AclRole#partition}
  */
  readonly partition?: string;
  /**
  * The list of policies that should be applied to the role. Both the policy ID or its name can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#policies AclRole#policies}
  */
  readonly policies?: string[];
  /**
  * node_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#node_identities AclRole#node_identities}
  */
  readonly nodeIdentities?: AclRoleNodeIdentities[] | cdktf.IResolvable;
  /**
  * service_identities block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#service_identities AclRole#service_identities}
  */
  readonly serviceIdentities?: AclRoleServiceIdentities[] | cdktf.IResolvable;
  /**
  * templated_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#templated_policies AclRole#templated_policies}
  */
  readonly templatedPolicies?: AclRoleTemplatedPolicies[] | cdktf.IResolvable;
}
export interface AclRoleNodeIdentities {
  /**
  * Specifies the node's datacenter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#datacenter AclRole#datacenter}
  */
  readonly datacenter: string;
  /**
  * The name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#node_name AclRole#node_name}
  */
  readonly nodeName: string;
}

export function aclRoleNodeIdentitiesToTerraform(struct?: AclRoleNodeIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
  }
}

export class AclRoleNodeIdentitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AclRoleNodeIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclRoleNodeIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenter = undefined;
      this._nodeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenter = value.datacenter;
      this._nodeName = value.nodeName;
    }
  }

  // datacenter - computed: false, optional: false, required: true
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // node_name - computed: false, optional: false, required: true
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }
}

export class AclRoleNodeIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AclRoleNodeIdentities[] | cdktf.IResolvable

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
  public get(index: number): AclRoleNodeIdentitiesOutputReference {
    return new AclRoleNodeIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AclRoleServiceIdentities {
  /**
  * The datacenters the effective policy is valid within. When no datacenters are provided the effective policy is valid in all datacenters including those which do not yet exist but may in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#datacenters AclRole#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * The name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#service_name AclRole#service_name}
  */
  readonly serviceName: string;
}

export function aclRoleServiceIdentitiesToTerraform(struct?: AclRoleServiceIdentities | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenters),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}

export class AclRoleServiceIdentitiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AclRoleServiceIdentities | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclRoleServiceIdentities | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._serviceName = value.serviceName;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return cdktf.Fn.tolist(this.getListAttribute('datacenters'));
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}

export class AclRoleServiceIdentitiesList extends cdktf.ComplexList {
  public internalValue? : AclRoleServiceIdentities[] | cdktf.IResolvable

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
  public get(index: number): AclRoleServiceIdentitiesOutputReference {
    return new AclRoleServiceIdentitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AclRoleTemplatedPoliciesTemplateVariables {
  /**
  * The name of node, workload identity or service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#name AclRole#name}
  */
  readonly name?: string;
}

export function aclRoleTemplatedPoliciesTemplateVariablesToTerraform(struct?: AclRoleTemplatedPoliciesTemplateVariablesOutputReference | AclRoleTemplatedPoliciesTemplateVariables): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class AclRoleTemplatedPoliciesTemplateVariablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AclRoleTemplatedPoliciesTemplateVariables | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclRoleTemplatedPoliciesTemplateVariables | undefined) {
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
export interface AclRoleTemplatedPolicies {
  /**
  * Specifies the datacenters the effective policy is valid within.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#datacenters AclRole#datacenters}
  */
  readonly datacenters?: string[];
  /**
  * The name of the templated policies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#template_name AclRole#template_name}
  */
  readonly templateName: string;
  /**
  * template_variables block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#template_variables AclRole#template_variables}
  */
  readonly templateVariables?: AclRoleTemplatedPoliciesTemplateVariables;
}

export function aclRoleTemplatedPoliciesToTerraform(struct?: AclRoleTemplatedPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datacenters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.datacenters),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    template_variables: aclRoleTemplatedPoliciesTemplateVariablesToTerraform(struct!.templateVariables),
  }
}

export class AclRoleTemplatedPoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): AclRoleTemplatedPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datacenters !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenters = this._datacenters;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._templateVariables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateVariables = this._templateVariables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AclRoleTemplatedPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datacenters = undefined;
      this._templateName = undefined;
      this._templateVariables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datacenters = value.datacenters;
      this._templateName = value.templateName;
      this._templateVariables.internalValue = value.templateVariables;
    }
  }

  // datacenters - computed: false, optional: true, required: false
  private _datacenters?: string[]; 
  public get datacenters() {
    return this.getListAttribute('datacenters');
  }
  public set datacenters(value: string[]) {
    this._datacenters = value;
  }
  public resetDatacenters() {
    this._datacenters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacentersInput() {
    return this._datacenters;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // template_variables - computed: false, optional: true, required: false
  private _templateVariables = new AclRoleTemplatedPoliciesTemplateVariablesOutputReference(this, "template_variables");
  public get templateVariables() {
    return this._templateVariables;
  }
  public putTemplateVariables(value: AclRoleTemplatedPoliciesTemplateVariables) {
    this._templateVariables.internalValue = value;
  }
  public resetTemplateVariables() {
    this._templateVariables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateVariablesInput() {
    return this._templateVariables.internalValue;
  }
}

export class AclRoleTemplatedPoliciesList extends cdktf.ComplexList {
  public internalValue? : AclRoleTemplatedPolicies[] | cdktf.IResolvable

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
  public get(index: number): AclRoleTemplatedPoliciesOutputReference {
    return new AclRoleTemplatedPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role consul_acl_role}
*/
export class AclRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "consul_acl_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AclRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AclRole to import
  * @param importFromId The id of the existing AclRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AclRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "consul_acl_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/consul/2.20.0/docs/resources/acl_role consul_acl_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AclRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AclRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'consul_acl_role',
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
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._partition = config.partition;
    this._policies = config.policies;
    this._nodeIdentities.internalValue = config.nodeIdentities;
    this._serviceIdentities.internalValue = config.serviceIdentities;
    this._templatedPolicies.internalValue = config.templatedPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // node_identities - computed: false, optional: true, required: false
  private _nodeIdentities = new AclRoleNodeIdentitiesList(this, "node_identities", false);
  public get nodeIdentities() {
    return this._nodeIdentities;
  }
  public putNodeIdentities(value: AclRoleNodeIdentities[] | cdktf.IResolvable) {
    this._nodeIdentities.internalValue = value;
  }
  public resetNodeIdentities() {
    this._nodeIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdentitiesInput() {
    return this._nodeIdentities.internalValue;
  }

  // service_identities - computed: false, optional: true, required: false
  private _serviceIdentities = new AclRoleServiceIdentitiesList(this, "service_identities", true);
  public get serviceIdentities() {
    return this._serviceIdentities;
  }
  public putServiceIdentities(value: AclRoleServiceIdentities[] | cdktf.IResolvable) {
    this._serviceIdentities.internalValue = value;
  }
  public resetServiceIdentities() {
    this._serviceIdentities.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdentitiesInput() {
    return this._serviceIdentities.internalValue;
  }

  // templated_policies - computed: false, optional: true, required: false
  private _templatedPolicies = new AclRoleTemplatedPoliciesList(this, "templated_policies", false);
  public get templatedPolicies() {
    return this._templatedPolicies;
  }
  public putTemplatedPolicies(value: AclRoleTemplatedPolicies[] | cdktf.IResolvable) {
    this._templatedPolicies.internalValue = value;
  }
  public resetTemplatedPolicies() {
    this._templatedPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatedPoliciesInput() {
    return this._templatedPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      partition: cdktf.stringToTerraform(this._partition),
      policies: cdktf.listMapper(cdktf.stringToTerraform, false)(this._policies),
      node_identities: cdktf.listMapper(aclRoleNodeIdentitiesToTerraform, true)(this._nodeIdentities.internalValue),
      service_identities: cdktf.listMapper(aclRoleServiceIdentitiesToTerraform, true)(this._serviceIdentities.internalValue),
      templated_policies: cdktf.listMapper(aclRoleTemplatedPoliciesToTerraform, true)(this._templatedPolicies.internalValue),
    };
  }
}
